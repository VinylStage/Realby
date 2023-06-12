/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

const MS_PER_SECOND = 1000;
const SECONDS_PER_HOUR = 3600;
const PAGES_BUFFER_LENGTH = 20;

module.exports = {
  onDemandEntries: {
    maxInactiveAge: SECONDS_PER_HOUR * MS_PER_SECOND,
    pagesBufferLength: PAGES_BUFFER_LENGTH,
  },
};
