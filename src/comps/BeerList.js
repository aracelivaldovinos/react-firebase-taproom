import { Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beer from './Beer';


const BeerList = ({docs, handleDelete, onClickEdit, handleSell, handleRestock}) => {
  return ( 
    <Row>
    {docs && docs.map((doc)=>(
      <Col>
        <div className="doc-div" key={doc.id}>
          <Beer 
          name = {doc.name}
          tagline = {doc.tagline}
          keg = {doc.keg}
          id = {doc.id}
          image_url = {doc.image_url}
          handleSell = {handleSell}
          handleRestock = {handleRestock}
          handleDelete = {handleDelete}
          onClickEdit = {onClickEdit}
          />
        </div>
      </Col>
    ))}
  </Row>

   );
}
 
export default BeerList;