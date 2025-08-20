import ACCRecognit from '@/assets/recognition/ACC-1.png'
import AUN from '@/assets/recognition/AUN-1.png'
import Government from '@/assets/recognition/g1-1.png'
// If you have more detail images later, import them and add to the arrays below.

export const recognitions = {
  'acc-recognition': {
    title: 'ACC RECOGNITION',
    description:
      'សាកលវិទ្យាល័យសៅស៍អ៊ីសថ៍អេយសៀត្រូវបានទទួលស្គាល់ដោយក្រសួងអប់រំ យុវជន និងកីឡា ដោយទទួលស្គាល់គុណភាពអប់រំពេញសិទ្ធថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋានជាប់គ្នាចំនួន ២លើក ដោយគណៈកម្មាធិការទទួលស្គាល់គុណភាពអប់រំកម្ពុជា (ACC) នៅឆ្នាំ២០០៧ និង២០១០ ។',
    // cover for list cards
    cover: ACCRecognit,
    // alias to keep old code working
    image: ACCRecognit,
    // images for detail page (add more when you have them)
    images: [ACCRecognit],
  },

  'aun-qa-recognition': {
    title: 'AUN-QA',
    description:
      'សាកលវិទ្យាល័យ សៅស៍អ៊ីសថ៍អេយសៀ ជាគ្រឹះស្ថានឧត្ដមសិក្សាតែមួយគត់នៅក្នុងខេត្តសៀមរាប ដែលបានក្លាយជាសមាជិកនៃស្ថាប័នទទួលស្គាល់គុណភាពអប់រំ អាស៊ាន (AUN-QA) ចាប់ពីខែ មេសា ឆ្នាំ ២០១៧ ដើម្បីធានាគុណភាពអប់រំកម្រិតស្តង់ដាអន្ដរជាតិរួមមាន៖ ការផ្លាស់ប្ដូរបទពិសោធគ្រប់គ្រង អភិវឌ្ឍកម្មវិធីសិក្សា អភិវឌ្ឍវិធីសាស្ដ្របង្រៀនបែបទំនើប ព្រមទាំងផ្លាស់ប្ដូរនិស្សិតសិក្សានៅសាកលវិទ្យាល័យជាសមាជិក (AUN-QA) ចំនួន ១៤៧ សាកលវិទ្យាល័យនៃបណ្ដាប្រទេសជាសមាជិកអាស៊ាន។',
    cover: AUN,
    image: AUN,
    images: [AUN],
  },

  'government-recognition': {
    title: 'GOVERNMENT RECOGNITION',
    description:
      'សាកលវិទ្យាល័យ សៅសថ៍អ៊ីសថ៍អេយសៀ ត្រូវបានទទួលស្គាល់ដោយរដ្ឋាភិបាលដោយអនុក្រឹត្យលេខ ៦៣ អនក្រ បក',
    cover: Government,
    image: Government,
    images: [Government],
  },
}
