import { rem, transitions } from 'polished';
import styled from 'styled-components';

import { theme } from '../../../styles';

// import { StylingConstants } from '../../../styles';
// const { media } = StylingConstants;

export const CapacityContainer = styled.div`
  padding: ${rem(28)} ${rem(32)};
  width: 100%;
  border: ${theme.styles.borderDarkGray};
  box-sizing: border-box;
  box-shadow: ${theme.styles.boxShadow};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RowCapacity = styled(Row)`
  margin-bottom: ${rem(12)};
`;

export const ColumnFee = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: ${rem(14)};
`;

export const TextRemote = styled.span`
  font-weight: 600;
  color: ${theme.colors.orange};
`;

export const TextLocal = styled(TextRemote)`
  color: ${theme.colors.purple};
`;

export const FeeRemote = styled.div`
  background: ${theme.colors.orange};
  color: ${theme.colors.white};
  text-decoration: underline;
  padding: ${rem(4)} ${rem(8)};
  font-family: 'Rajdhani';
  font-weight: 600;
  font-size: ${rem(14)};
  cursor: pointer;
`;

export const FeeLocal = styled(FeeRemote)`
  background: ${theme.colors.purple};
`;

export const TtlCapacity = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem(4)};
`;

export const TextCapacityValue = styled.span`
  font-family: 'Rajdhani';
  font-weight: 600;
  font-size: ${rem(24)};
  padding-bottom: ${rem(2)};
`;

export const TextCapacity = styled.span`
  font-weight: 500;
`;

export const BarBond = styled.div<{ widthPercentage: number }>`
  height: ${rem(20)};
  width: calc(${({ widthPercentage }) => widthPercentage}% + 1px);
  background: ${({ widthPercentage }) => widthPercentage !== 0 && theme.colors.orange};
  border-top-left-radius: ${rem(32)};
  border-bottom-left-radius: ${rem(32)};
  ${({ theme }) => transitions(['width'], theme.comet.duration.normal)};
`;

export const Bar = styled.div<{ isPaid: Boolean }>`
  height: 100%;
  position: relative;
  margin-right: ${rem(12)};
  margin-bottom: ${rem(28)};
  background: ${({ isPaid }) => (isPaid ? theme.colors.purple : theme.colors.placeholderBar)};
  border-radius: ${rem(32)};
  display: flex;
  align-items: center;
  box-shadow: ${theme.styles.boxShadowBar};
`;