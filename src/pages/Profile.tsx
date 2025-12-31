import { MainLayout } from "@/components/layout/MainLayout";

const Profile = () => (
  <MainLayout>
    <div className="px-4 py-8 text-center">
      <h1 className="text-3xl font-display font-bold gradient-text">Profile</h1>
      <p className="text-muted-foreground mt-2">Connect wallet to view profile</p>
    </div>
  </MainLayout>
);

export default Profile;
