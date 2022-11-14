import _mock from './_mock';

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  role: _mock.role(index),
  avatar: _mock.image.avatar(index),
  rating: 5,
  review:
    'Работа выполненна точно в срок, соблюдены все стандарты и договоренности. Выражаем огромную благодарность за проделанную работу!',
}));
