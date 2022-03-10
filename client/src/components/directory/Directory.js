import MenuItem from '../menuItem/MenuItem';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/Directory-selector';
import './Directory.scss';
import { connect } from 'react-redux';
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
