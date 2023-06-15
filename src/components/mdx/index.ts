// @ts-ignore
import BlockQuote from './BlockQuote.astro';
// @ts-ignore
import Code from './Code.astro';
// @ts-ignore
import Header from './Header.astro';
// @ts-ignore
import Paragraph_ from './Paragraph.astro';
// @ts-ignore
import Pre from './Pre.astro';
// @ts-ignore
import OrderedList from './OrderedList.astro';
// @ts-ignore
import UnorderedList from './UnorderedList.astro';

export default {
  h1: Header,
  h2: Header,
  h3: Header,
  h4: Header,
  h5: Header,
  h6: Header,
  p: Paragraph_,
  blockquote: BlockQuote,
  code: Code,
  pre: Pre,
  ol: OrderedList,
  ul: UnorderedList,
};
