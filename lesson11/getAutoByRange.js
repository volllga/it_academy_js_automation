export function getAutoByRange(autos, option, lowerBoundary, upperBoundary) {
  return autos.filter(item => (lowerBoundary <= item[option]
                                                && item[option] <= upperBoundary));
}