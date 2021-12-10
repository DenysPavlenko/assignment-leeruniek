import { Accordion } from 'components/Accordion';
import PropTypes from 'prop-types';
import './Categories.scss';

const getNotes = (notes, id) => {
  return notes.filter(({ categoryId }) => categoryId === id);
};

const sortAlphabetically = (arr, prop) => {
  return [...arr].sort((a, b) => {
    const textA = a[prop].toLowerCase();
    const textB = b[prop].toLowerCase();
    return textA.localeCompare(textB);
  });
};

const Categories = ({ data, notes }) => {
  const sortedCategories = sortAlphabetically(data, 'name');

  const categories = sortedCategories.filter(
    ({ isArchived, parentNoteCategoryId }) =>
      !isArchived && !parentNoteCategoryId
  );

  const subCategories = sortedCategories.filter(
    ({ isArchived, parentNoteCategoryId }) =>
      !isArchived && parentNoteCategoryId
  );

  const sortedNotes = [...notes].sort(
    (a, b) => new Date(a.dateCreated) - new Date(b.dateCreated)
  );

  return (
    <div className="categories" data-testid="categories">
      {categories.map(({ name, id }) => {
        const catNotes = getNotes(sortedNotes, id);
        const content = subCategories.filter(
          ({ parentNoteCategoryId }) => parentNoteCategoryId === id
        );

        return (
          <Accordion
            key={id}
            className="categories__item"
            heading={
              <>
                <h3 className="categories__item-name">{name}</h3>
                {catNotes.map(({ id, content }) => (
                  <p key={id} className="categories__item-note">
                    {content}
                  </p>
                ))}
              </>
            }
          >
            {content.length > 0 &&
              content.map(({ name, id }) => {
                const subCatNotes = getNotes(sortedNotes, id);

                return (
                  <div className="categories__item" key={id}>
                    <h4 className="categories__item-name">{name}</h4>
                    {subCatNotes.map(({ id, content }) => (
                      <p key={id} className="categories__item-note">
                        {content}
                      </p>
                    ))}
                  </div>
                );
              })}
          </Accordion>
        );
      })}
    </div>
  );
};

Categories.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isArchived: PropTypes.bool.isRequired,
      parentNoteCategoryId: PropTypes.number,
      groupPlanId: PropTypes.number.isRequired,
    })
  ).isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      categoryId: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      dateCreated: PropTypes.string.isRequired,
      groupPlanId: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Categories;
