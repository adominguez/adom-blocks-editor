import { useState } from 'react'
import { Block, UseBlockState } from '@/types/definitions'

const INITIAL_HEADING: Block = {
  key: 'initial-heading',
  hideToolbar: true,
  editing: false,
  block: [{
    type: 'heading',
    variant: 'h1',
    children: [{
      text: ''
    }],
  }],
}

const INITIAL_PARAGRAPH: Block = {
  key: 'initial-paragraph',
  editing: false,
  hideToolbar: false,
  block: [{
    type: 'paragraph',
    children: [{
      text: ''
    }],
  }]
}

const NEW_BLOCK = (): Block => ({
  key: crypto.randomUUID(),
  editing: false,
  hideToolbar: true,
  block: [{
    type: 'paragraph',
    children: [{
      text: ''
    }],
  }]
})

const INITIAL_VALUES: Block[] = [INITIAL_HEADING, INITIAL_PARAGRAPH]

export default function useBlock() {
  const [blocks, setBlocks] = useState<UseBlockState['blocks']>(INITIAL_VALUES);

  const addNewBlock = (index = blocks.length, newBlock = NEW_BLOCK()): Block | undefined => {
    const [nextChildren] = blocks[index + 1]?.block?.[0]?.children || []
    if (nextChildren && !nextChildren.text) return undefined
    setBlocks([...blocks.slice(0, index + 1), newBlock, ...blocks.slice(index + 1, blocks.length)]);
    return newBlock;
  }

  const editingField = (i: number) => {
    setBlocks((oldData) => oldData.map((item, index) => ({
      ...item,
      editing: i === index && item.block.some(({ children }) => children.some(item => item.text))
    })))
  }

  const removeEditingField = (i: number) => {
    setBlocks((oldData) => oldData.map((item, index) => ({
      ...item,
      editing: i === index ? false : item.editing,
    })))
  }

  const removeAllPopover = () => {
    setBlocks((oldData) => oldData.map((item) => ({
      ...item,
      editing: false
    })))
  }

  const updateBlockByIndex = (block: Block, index: number) => {
    setBlocks((oldData) => oldData.map((item, i) => (i === index ? block : item)))
  }

  const removeBlock = (index: number) => {
    const block = blocks[index]
    if (block.key !== 'initial-heading' && block.key !== 'initial-paragraph') {
      const newBlocks = blocks.filter(item => item.key !== block.key)
      setBlocks(newBlocks)
    }
  }

  const moveUpBlock = (index: number) => {
    if (index > 1 && index < blocks.length) {
      const newArray = [...blocks];
      const elemento = newArray.splice(index, 1)[0];
      newArray.splice(index - 1, 0, elemento);
      setBlocks(newArray);
    }
  }

  const moveDownBlock = (index: number) => {
    if (index >= 0 && index < blocks.length - 1) {
      const newArray = [...blocks];
      const elemento = newArray.splice(index, 1)[0];
      newArray.splice(index + 1, 0, elemento);
      setBlocks(newArray);
    }
  }

  return { blocks, addNewBlock, removeBlock, editingField, removeAllPopover, removeEditingField, updateBlockByIndex, moveUpBlock, moveDownBlock }
}