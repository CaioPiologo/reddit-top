const styles = (theme) => ({
  card: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    padding: 0,
  },
  cardHeaderSubheader: {
    fontSize: '12px',
  },
  cardHeaderContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listItem: {
    padding: 0,
  },
  actionArea: {
    padding: '10px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '150px',
  },
  media: {
    minWidth: '120px',
    marginRight: '10px',
  },
  description: {
    flex: '1 1 auto',
  },
  inline: {
    display: 'inline',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  comments: {
    color: theme.palette.warning.dark,
  },
});

export default styles;
