import fsPromises from "fs/promises";
import path from "path";

export async function getLocalProducts(id?: number) {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "data/dishes.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData: Dish[] = JSON.parse(jsonData.toString());

  if (!id) {
    return objectData;
  } else {
    objectData.filter((item) => item.id === id);
    return objectData;
  }
}
