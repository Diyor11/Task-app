import { Chidlren, Editor, Mens, Privicy, Womans } from "../pages";

const publicRoutes = [
  {
    name: "mens",
    path: '/men',
    componenet: Mens,
  },
  {
    name: "women",
    path: '/women',
    componenet: Womans,
  },
  {
    name: "chidlren",
    path: '/chidlren',
    componenet: Chidlren,
  },
  {
    name: "chidlren",
    path: '/privicy',
    componenet: Privicy,
  },
  {
    name: "editor",
    path: '/editor/:id',
    componenet: Editor,
  },
]

const priviteRoutes = []

const routes = {
  public: publicRoutes,
  privite: priviteRoutes,
}

export default routes