import NoteModel from '../models/Note.js';

const getNotesService = async (pageNumber) => {
  return await NoteModel.paginate(
    { active: true },
    {
      page: pageNumber,
      lean: true,
      limit: 10,
      populate: { path: 'createdBy', select: 'username email _id' }
    }
  );
};

export default getNotesService;
