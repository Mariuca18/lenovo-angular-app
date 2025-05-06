
import { init, i, id, InstaQLEntity } from "@instantdb/core";

// ID for app: mariuca
const APP_ID = '600e24d2-25de-4433-8353-708436a88e46';

// Optional: Declare your schema!
const schema = i.schema({

  entities: {
    recipes: i.entity({
        id:i.string(),
      name: i.string(),
      image: i.string(),
      difficulty: i.string(),
      prepTimeMinutes: i.number(),
    }),
  },
});
const db=init({appId:APP_ID,schema})
export{db,schema};