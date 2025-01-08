The correct approach involves using `.then()` to handle the promise returned by `once('value')` or using `async/await`:

**Using Promises:**

```javascript
const ref = firebase.database().ref('myData');
ref.once('value').then((snapshot) => {
  const data = snapshot.val();
  console.log(data); // data is now available
}).catch((error) => {
  console.error(error);
});
```

**Using Async/Await:**

```javascript
async function fetchData() {
  const ref = firebase.database().ref('myData');
  try {
    const snapshot = await ref.once('value');
    const data = snapshot.val();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();
```
These methods ensure the code waits for the data to be retrieved before attempting to access and use it, preventing `undefined` errors.