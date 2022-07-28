//We always import the react libary to make our GUI for the todo list
import React, {useState} from 'react';
//Now we export our component
export default() => {
 const [description, setDescription] = useState(undefined);
 const handleSubmit = e => {
 e.preventDefault();
 }

 return (
    <div>
        <h2>New task</h2>
        <form onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea 
                className="form-control" 
                id="description" 
                onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
 );
}