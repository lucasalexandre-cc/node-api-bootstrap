class MissingRequiredAttributes extends Error {
  constructor(resourceName, givenAttributes, requiredAttributes) {
    const missingAttributes = this._missingAttributes(
      givenAttributes,
      requiredAttributes
    );
    super(
      `Missing required attributes for ${resourceName}: ${missingAttributes.join(
        ", "
      )}.`
    );
  }

  _missingAttributes(givenAttributes, requiredAttributes) {
    return requiredAttributes.filter((attr) => !givenAttributes.includes(attr));
  }
}

module.exports = MissingRequiredAttributes;
