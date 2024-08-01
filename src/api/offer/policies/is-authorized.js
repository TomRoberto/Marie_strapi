module.exports = async (policyContext, config, { strapi }) => {
  const requesterId = policyContext.state.user.id;
  const offerId = policyContext.request.params.id;

  const offer = await strapi.entityService.findOne(
    "api::offer.offer",
    offerId,
    { populate: ["owner"] }
  );
  if (requesterId === offer.owner.id) {
    return true;
  } else {
    return false;
  }
};
