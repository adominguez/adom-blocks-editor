import { FC } from 'react';
import useBlocks from '@/hooks/useBlocks';
import { AdomBlocksEditorProps, Block, BlockValue } from '@/types/definitions';
import EditableComponent from '@/components/Editor/EditableComponent';
import { Descendant } from 'slate';


const AdomBlocksEditor: FC<AdomBlocksEditorProps> = () => {
  const {
    blocks,
    // addNewBlock,
    // removeBlock,
    editingField,
    // removeEditingField,
    updateBlockByIndex,
    // moveUpBlock,
    // moveDownBlock,
  } = useBlocks();

  const handleFocus = (index: number) => {
    editingField(index);
  };

  const handlerChange = (block: Descendant[], index: number) => {
    const newBlock = block as BlockValue[];
    const blockEdited: Block = {
      ...blocks[index],
      block: newBlock,
    };
    updateBlockByIndex(blockEdited, index);
  };

  return blocks?.length ? blocks.map(({ key, block, editing, hideToolbar }, index) => (
    <EditableComponent
      key={key}
      block={block}
      index={index}
      editing={editing}
      hideToolbar={hideToolbar}
      onFocus={handleFocus}
      onChange={(content) => handlerChange(content, index)}
    />
  )) : <>loading</>;
};

export default AdomBlocksEditor;
