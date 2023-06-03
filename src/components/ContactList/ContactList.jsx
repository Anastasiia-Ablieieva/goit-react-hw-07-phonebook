import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import css from './ContactList.module.css';
import { useEffect } from 'react';

export const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchContacts());
}, [dispatch]);

    const onDeleteContact = id => {
        dispatch(deleteContact(id));
    };

    return (
        <>
            {!filteredContacts?.length && !error && !isLoading && (<p>Loading... </p>)}
            <ul className={css.contactList}>
                {filteredContacts.map(({ id, name, phone }) => {
                    return(
                        <li className={css.contactItem} 
                            key={id}> 
                            <span>{name}: {phone}</span>
                            <button className={css.button} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};
