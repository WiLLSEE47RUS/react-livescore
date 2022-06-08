export const lineupsPositions = {
  basketball: {
    C:'C',
    CF:'CF',
    F:'F',
    FC:'FC',
    FG:'FG',
    G:'G',
    GF:'GF',
  },
  football: {
    C:'C',
    D:'D',
    F:'F',
    G:'G',
    M:'M',
  },
  hockey: {
    C:'C',
    D:'D',
    F:'F',
    G:'G',
    L:'L',
    R:'R',
  }
};

export const lineupsPositionsNaming = {
  basketball: {
    [lineupsPositions.basketball.C]:'Центральный',
    [lineupsPositions.basketball.CF]:'Центральный форвард',
    [lineupsPositions.basketball.F]:'Форвард',
    [lineupsPositions.basketball.FC]:'Тяжёлый форвард',
    [lineupsPositions.basketball.FG]:'Атакующий защитник',
    [lineupsPositions.basketball.G]:'Разыгрывающий защитник',
    [lineupsPositions.basketball.GF]:'Малый форвард',
  },
  football: {
    [lineupsPositions.football.C]:'Центральный нападающий',
    [lineupsPositions.football.D]:'Защитник',
    [lineupsPositions.football.F]:'Форвард',
    [lineupsPositions.football.G]:'Голкипер',
    [lineupsPositions.football.M]:'Полузащитник',
  },
  hockey: {
    [lineupsPositions.hockey.C]:'Центральный нападающий',
    [lineupsPositions.hockey.D]:'Защитник',
    [lineupsPositions.hockey.F]:'Форвард',
    [lineupsPositions.hockey.G]:'Голкипер',
    [lineupsPositions.hockey.L]:'Левый фронт, нападающий',
    [lineupsPositions.hockey.R]:'Правый фронт, нападающий',
  }
};

export const lineupsPositionsShortNaming = {
  basketball: {
    [lineupsPositions.basketball.C]:'Ц',
    [lineupsPositions.basketball.CF]:'ЦФД',
    [lineupsPositions.basketball.F]:'ФВД',
    [lineupsPositions.basketball.FC]:'ТФД',
    [lineupsPositions.basketball.FG]:'АЗ',
    [lineupsPositions.basketball.G]:'РЗ',
    [lineupsPositions.basketball.GF]:'МФ',
  },
  football: {
    [lineupsPositions.football.C]:'ЦФД',
    [lineupsPositions.football.D]:'ЗАЩ',
    [lineupsPositions.football.F]:'ФВД',
    [lineupsPositions.football.G]:'ВРТ',
    [lineupsPositions.football.M]:'ПЗЩ',
  },
  hockey: {
    [lineupsPositions.hockey.C]:'ЦФД',
    [lineupsPositions.hockey.D]:'ЗАЩ',
    [lineupsPositions.hockey.F]:'ФВД',
    [lineupsPositions.hockey.G]:'ВРТ',
    [lineupsPositions.hockey.L]:'ЛФН',
    [lineupsPositions.hockey.R]:'ПФН',
  }
};
