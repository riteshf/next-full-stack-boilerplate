const resolvers = {
  Query: {
    async getCurrentTime(_: any) {
      let currentTime = { date: new Date() };
      return currentTime;
    },
  },
};

export default resolvers;
