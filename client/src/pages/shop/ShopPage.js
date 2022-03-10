import CollectionsOverview from '../../components/collections-overview/Collections-overview';
import { Outlet, Route, Routes } from 'react-router-dom';
const ShopPage = () => (
  <div className="shop-page">
    <Routes>
      <Route path="/" element={<CollectionsOverview />} />
    </Routes>
    <Outlet />
  </div>
);
export default ShopPage;
