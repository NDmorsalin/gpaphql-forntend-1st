import { useMutation } from "@apollo/client";
import { UPDATE_CLIENT } from "../query/allQuery";


function UpdateClient({ singleClientInfo}) {
    console.log(singleClientInfo);

    let {name} = singleClientInfo || 'nay', {email} = singleClientInfo || 'nay', {phone} = singleClientInfo || 'nay';
    const [updateClient] = useMutation(UPDATE_CLIENT);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateClient({ variables: { id:singleClientInfo.id, name, email, phone } });
            
          }}
        >
          <input
            type="text"
            placeholder="Name"
            defaultValue={singleClientInfo.name}
            onChange={e => name = e.target.value}
          />
          <input
            type="email"
            placeholder="Email"
            defaultValue={singleClientInfo.email}
            onChange={e => email = e.target.value}
          />
          <input
            type="text"
            placeholder="Phone"
            defaultValue={singleClientInfo.phone}
            onChange={e => phone = e.target.value}
          />
          <button type="submit">Update Client</button>
        </form>
      </div>
    );
  }
  export default UpdateClient