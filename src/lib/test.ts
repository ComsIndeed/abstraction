// TODO : Create the interfaces of the different objects
// Define interface of Abstraction Project
// Define interface of a folder item
//
//
//
//
//
//

interface HeadProperty {
  name: string;
  dependencies: string[];
  author?: string;
  dateCreated?: Date;
  dateModified?: Date;
  [key: string]: any;
}

interface instruction {
  code: string;
  language?: string;
  [key: string]: any;
}

interface Connection {
  to:
    | HeadPropertyCodeblockAbstractionElement["id"]
    | HeadPropertyCodeblockAbstractionElement["id"];
  relationship: "normal" | string;
}

interface CodeblockAbstractionElement {
  head: HeadPropertyCodeblockAbstractionElement;
  instructions: instruction[];
}

interface HeadPropertyFolderAbstractionElement {
  name: string;
  id: string;
  [key: string]: any;
}

interface HeadPropertyCodeblockAbstractionElement {
  name: string;
  id: string;
  blockType: "normal" | "looping" | "";
  connections: Connection[];
  [key: string]: any;
}

interface FolderAbstractionElement {
  head: HeadPropertyFolderAbstractionElement;
  contents: ContentsProperty;
}

type ContentsProperty = (
  | FolderAbstractionElement
  | CodeblockAbstractionElement
)[];

interface AbstractionProject {
  head: HeadProperty;
  contents: ContentsProperty;
}

function testCode() {
  const exampleProject: AbstractionProject = {
    head: {
      name: "My Project",
      dependencies: ["dependency1", "dependency2"],
      author: "John Doe",
      dateCreated: new Date("2023-01-01"),
      dateModified: new Date("2023-05-18"),
      version: "1.0.0", // additional custom property
    },
    contents: [
      {
        head: {
          name: "Folder 1",
          description: "This is the first folder", // additional custom property
        },
        contents: [
          {
            head: {
              name: "Subfolder 1.1",
              description: "This is a subfolder in Folder 1", // additional custom property
            },
            contents: [
              {
                name: "Codeblock 1",
                instructions: [
                  {
                    code: "console.log('Hello, World!');",
                    language: "JavaScript",
                    note: "This is a sample code block", // additional custom property
                  },
                ],
              },
            ],
          },
          {
            name: "Codeblock 2",
            instructions: [
              {
                code: "print('Hello, World!')",
                language: "Python",
                note: "Another sample code block", // additional custom property
              },
            ],
          },
        ],
      },
      {
        head: {
          name: "Folder 2",
          description: "This is the second folder", // additional custom property
        },
        contents: [
          {
            name: "Codeblock 3",
            instructions: [
              {
                code: "echo 'Hello, World!'",
                language: "Shell",
                note: "Shell script sample", // additional custom property
              },
            ],
          },
        ],
      },
    ],
  };

  console.log(exampleProject);
}

export default function test() {
  testCode();
}
