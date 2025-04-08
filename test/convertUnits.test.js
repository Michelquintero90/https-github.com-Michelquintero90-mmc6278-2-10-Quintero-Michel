const { expect } = require('chai')
const {
  getPounds,
  getFeetAndInches
} = require('../util/convertUnits')

describe('unit conversion helpers', () => {
  describe('getPounds', () => {
    it('should convert 4600 hectograms to "1014 pounds"', () => {
      expect(getPounds(4600)).to.eq('1014 pounds')
    })

    it('should convert 400 hectograms to "88 pounds"', () => {
      expect(getPounds(400)).to.eq('88 pounds')
    })

    it('should convert 560 hectograms to "123 pounds"', () => {
      expect(getPounds(560)).to.eq('123 pounds')
    })
  })

  describe('getFeetAndInches', () => {
    it('should convert 15 decimeters to "4 feet 11 inches"', () => {
      expect(getFeetAndInches(15)).to.eq('4 feet 11 inches')
    })

    it('should convert 21 decimeters to "6 feet 10 inches"', () => {
      expect(getFeetAndInches(21)).to.eq('6 feet 10 inches')
    })

    it('should convert 65 decimeters to "21 feet 3 inches"', () => {
      expect(getFeetAndInches(65)).to.eq('21 feet 3 inches')
    })
  })
})
