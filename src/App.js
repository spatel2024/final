import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';


const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }
  

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  


{notes.map((note) => (
  <Flex
    key={note.id || note.name}
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
      <View

/>
    <Text as="strong" fontWeight={700}>
      {note.name}
    </Text>
    <Text as="span">{note.description}</Text>
    {note.image && (
      <Image
        src={note.image}
        alt={`visual aid for ${notes.name}`}
        style={{ width: 400 }}
      />
    )}
    <Button variation="link" onClick={() => deleteNote(note)}>
      Delete note
    </Button>
  </Flex>
))}

  return (
    <View className="App">
      <Heading level={1}>Sonia's Reminders</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <View
          name="image"
          as="input"
          type="file"
          style={{ alignSelf: "end" }}
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
       </Flex>
</View>

<Heading level={5}>Quick Thoughts</Heading>
 <table border="0.5px" align="center"><tbody><tr><td> 
 <p><Text as="strong" color={'#666699'}>More about this:</Text></p>
<ul>
<li>All of my notes are quick reminders of what needs to be done.</li>
<li>Need a motivational quote? Press the button!</li>
<li>If you want to see a better site, go <a href="https://master.d1wqof7c5cgqk6.amplifyapp.com">Sonia's</a>.</li>
<li>If you want to be inspired with music, click the lyrics button </li>
</ul>
<View margin="3rem 0">
{notes.map ( (note) => (
<Flex
key={note.id || note. name}
direction="row"
justifyContent="left"
alignItems="left"
>

<Text as="strong" fontSize={12} color={'#666799'}> 
  {note. name}
</Text>
<Text as="span">{note.description}</Text>
{note.image && (
<Image 
  src={note.image}
  alt={'visual aid for ${notes.name}'}
  style={{ width: 100 }}
  />
)}
<Button variation="link" 
onClick={() => deleteNote (note)}>
<Text as="strong" fontSize={10} color={'#f6700'}>
Delete
</Text>
</Button>
</Flex>
))}
</View></td></tr></tbody></table>
<Button onClick={signOut}>Sign Out</Button>
  
 </View>

);

};


export default withAuthenticator(App);