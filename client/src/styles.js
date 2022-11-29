import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(45deg,#DB0B5F, #6F00ED)',
  },
  heading: {
    color: '#ffffff',
  },
  image: {
    marginLeft: '15px',
  },
}));
