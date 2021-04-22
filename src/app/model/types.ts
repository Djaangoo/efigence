export type Unit = 'kB' | 'mB';

export type UnitPrecisionMap = {
  [u in Unit]: number;
};
