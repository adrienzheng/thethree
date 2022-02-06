module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5efbcb6126b6951ed22f17e93595f96f'),
  },
});
