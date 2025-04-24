import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contact}>
      <span>{contact.name}: {contact.number}</span>
      <button onClick={() => onDelete(contact.id)} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
