import { SyntheticEvent, Ref, FC, forwardRef } from 'react';
import { useRef } from 'react';
import { Transforms } from 'slate';
import useBlocks from '@/hooks/useBlocks';
import { AdomBlocksEditorProps, ForwardedEditableComponentProps } from '@/types/definitions';
import EditableComponent from '@/components/Editor/EditableComponent';

const ForwardedEditableComponent = forwardRef(
  (props: ForwardedEditableComponentProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div className={`relative flex gap-2 pb-2 ${props.className}`} data-id={props.id} ref={ref}>
        <EditableComponent {...props} className="flex-1 w-full" />
      </div>
    );
  }
);

const AdomBlocksEditor: FC<AdomBlocksEditorProps> = () => {
  const {
    blocks,
    addNewBlock,
    removeBlock,
    editingField,
    removeEditingField,
    updateBlockByIndex,
    moveUpBlock,
    moveDownBlock,
  } = useBlocks();
  const editableRef = useRef<HTMLElement[]>([]);

  const focusElementById = (key: string) => {
    setTimeout(() => {
      const element = editableRef.current.find(
        (item) => item?.getAttribute('data-id') === key
      );
      element?.firstChild?.focus();
    }, 100);
  };

  const handleEnter = (index: number) => {
    const { key } = addNewBlock(index) || {};
    if (key) {
      focusElementById(key);
    }
  };

  const handleArrowUp = (index: number) => {
    focusElementById(blocks[index - 1]?.key);
  };

  const handleArrowDown = (index: number) => {
    focusElementById(blocks[index + 1]?.key);
  };

  const handleRemoveBlock = (index: number) => {
    handleArrowUp(index);
    removeBlock(index);
  };

  const handleFocus = (e: SyntheticEvent<EventTarget>) => {
    const currentElement = e.currentTarget?.parentElement as HTMLElement;
    const key = currentElement?.getAttribute('data-id');
    if (key) {
      const index = blocks.findIndex((item) => item.key === key);
      !blocks[index].editing && editingField(index);
    }
  };

  const handleBlur = (e: SyntheticEvent<EventTarget>) => {
    const currentElement = e.currentTarget?.parentElement as HTMLElement;
    const key = currentElement?.getAttribute('data-id');
    if (key) {
      const index = blocks.findIndex((item) => item.key === key);
      blocks[index].editing && removeEditingField(index);
    }
  };

  const handlerChange = (block: object, index: number) => {
    const blockEdited = {
      ...blocks[index],
      block,
    };
    updateBlockByIndex(blockEdited, index);
  };

  const handleUpdateType = (type: string, index: number, editor: any) => {
    const blockSelected = blocks[index];
    const { key } = blockSelected;
    const newBlock = {
      ...blockSelected,
      editing: false,
      block: blockSelected.block.map((block) => ({
        ...block,
        ...type,
      })),
    };
    updateBlockByIndex(newBlock, index);
    Transforms.setNodes(editor, type, { at: [0] });
    focusElementById(key);
  };

  const handleMoveUp = (index: number) => {
    moveUpBlock(index);
    focusElementById(blocks[index]?.key);
  };

  const handleMoveDown = (index: number) => {
    moveDownBlock(index);
    focusElementById(blocks[index]?.key);
  };

  const callbackEditor = (editor: any) => {
    if (editor) {
      Transforms.select(editor, { offset: 0, path: [0, 0] });
    }
  };

  return blocks?.length ? blocks.map(({ key, block, editing, hideToolbar }, index) => (
    <ForwardedEditableComponent
      ref={(el) => (editableRef.current[index] = el)}
      index={index}
      id={key}
      key={key}
      initialValue={block}
      editing={editing}
      hideToolbar={hideToolbar}
      callbackEditor={callbackEditor}
      onRemoveBlock={handleRemoveBlock}
      onArrowUp={handleArrowUp}
      onArrowDown={handleArrowDown}
      onFocus={handleFocus}
      onEnter={handleEnter}
      onBlur={handleBlur}
      onUpdateType={handleUpdateType}
      onMoveUp={handleMoveUp}
      onMoveDown={handleMoveDown}
      onChange={(content) => handlerChange(content, index)}
    />
  )) : <>loading</>;
};

export default AdomBlocksEditor;
