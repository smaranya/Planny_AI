export enum FontStyles {
  regular = 1,
  blockReg,
  bold,
  italic,
  blockBold
}

const names = {
  [FontStyles.regular]: 'PlayfairDisplay-Regular',
  [FontStyles.bold]: 'PlayfairDisplay-Bold',
  [FontStyles.blockReg]: 'Inter-Regular',
  [FontStyles.italic]: 'PlayfairDisplay-Italic',
  [FontStyles.blockBold]: 'Inter-SemiBold',
};

const defaultName = FontStyles.regular;

export const getName = function (fontStyle?: FontStyleType): string {
  if (!fontStyle) {
    return names[defaultName];
  }
  return names[fontStyle] || names[defaultName];
};

export type FontStyleType = FontStyles;
