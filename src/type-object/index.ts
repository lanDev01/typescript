const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

objectA.keyB = 'Novo valor B';
