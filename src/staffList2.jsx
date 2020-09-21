import faker from 'faker'
const staffList2 =[
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
export default staffList2