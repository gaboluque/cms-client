const noFormatter = (args) => args;

export default ({
  type,
  formatter = noFormatter,
  loader = true,
  spinner = false,
  callback = null,
  ...args
}) => ({
  type,
  notifier: true,
  loader,
  spinner,
  callback,
  ...formatter({ ...args }),
});
