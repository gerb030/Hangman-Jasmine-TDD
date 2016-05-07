describe('Array', function() {
    it('should contain values', function() {
	  var array = ['iets', 'nog iets', 'iets anders'];
	  expect(array.contains("nog iets")).toEqual(true)
	  expect(array.contains("niets")).toEqual(false)
	})
});