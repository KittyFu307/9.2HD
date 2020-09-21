import faker from 'faker'
const staffList1 =[
    {
       "avator":faker.image.avatar(),
        "name":faker.name.findName(),
        "position":faker.name.jobTitle()
    },
    {
        "avator":faker.image.avatar(),
         "name":faker.name.findName(),
         "position":faker.name.jobTitle()
     },
     {
        "avator":faker.image.avatar(),
         "name":faker.name.findName(),
         "position":faker.name.jobTitle()
     }

]
export default staffList1