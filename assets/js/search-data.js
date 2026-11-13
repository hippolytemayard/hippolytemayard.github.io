// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-products",
          title: "products",
          description: "Clinical AI I have taken to production.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/products/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-code",
          title: "code",
          description: "Open-source work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "External lecturer at Université Paris Dauphine-PSL since 2022.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download the one-page PDF, or read the full version below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-yolov11-pytorch",
          title: 'yolov11-pytorch',
          description: "Apache-2.0 re-implementation of the YOLOv11 architecture in pure PyTorch — detection, instance segmentation and pose heads. Trained weights to come.",
          section: "Projects",handler: () => {
              window.location.href = "/code/yolov11-pytorch/";
            },},{id: "projects-teeth-3d-mesh-segmentation",
          title: 'teeth-3d-mesh-segmentation',
          description: "MeshSegNet for automated tooth labelling on raw intra-oral 3D scans — 3DTeethSeg22 challenge (MICCAI 2022).",
          section: "Projects",handler: () => {
              window.location.href = "/code/teeth-3d-mesh-segmentation/";
            },},{id: "projects-certainty-pooling-mil",
          title: 'certainty-pooling-mil',
          description: "PyTorch implementation of Certainty Pooling (Gildenblat et al., 2020) for weakly supervised classification of histopathology slides — one label per slide, no label per tile.",
          section: "Projects",handler: () => {
              window.location.href = "/code/certainty-pooling-mil/";
            },},{id: "projects-chest-x-ray-generative-models",
          title: 'chest-x-ray-generative-models',
          description: "Unconditional generation of chest X-rays with a denoising diffusion probabilistic model (DDPM), trained at 128×128 on a public chest radiography dataset.",
          section: "Projects",handler: () => {
              window.location.href = "/code/chest-x-ray-generative-models/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%69%70%70%6F%6C%79%74%65%6D%61%79%61%72%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hippolytemayard", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hippolyte-mayard", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Xa2o7yMAAAAJ", "_blank");
        },
      },];
