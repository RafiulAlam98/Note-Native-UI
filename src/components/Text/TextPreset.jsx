import { colors } from '../../Theme/Colors';
import { Typography } from '../../Theme/Typography';

const BASE = {
  fontFamily: Typography.primary,
  color: colors.white,
  fontSize: 16,
};

const BASE_BOLD = {
  fontFamily: Typography.primaryBold,
  color: colors.white,
};

const CEIL = {
  fontFamily: Typography.secondary,
  color: colors.white,
};

export const Presets = {
  default: BASE,
  bold: CEIL,
  h1: {
    ...CEIL,
    fontSize: 32,
  },
  h2: {
    ...CEIL,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
};
