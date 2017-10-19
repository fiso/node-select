/*
 Select is syntactic sugar to help maintain a functional approach to
 assigning to variables. It lets you avoid reassigning, so you can keep
 things const-y, if you're into that sort of thing.

 Example (without select):

  let o = null;

  if (someCondition) {
    o = someConstructorMaybe();
  } else if (someOtherCondition) {
    o = somethingElse;
  }

 Example (with select):

  const o = select(criteriaObject, (criteria) => {
    if (criteria.someCondition) {
      return someConstructorMaybe();
    } else if (criteria.someOtherCondition) {
      return somethingElse;
    } else {
      return null;
    }
  });

*/

export function select (criteria, selector) {
  return selector(criteria);
}
