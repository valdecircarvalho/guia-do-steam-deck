using SteamController.ProfilesSettings;
using HapticPad = SteamController.Devices.SteamController.HapticPad;

namespace SteamController.Profiles.Predefined
{
    public class X360HapticProfile : X360Profile
    {
        private ProfilesSettings.HapticSettings HapticSettings
        {
            get { return ProfilesSettings.HapticSettings.X360; }
        }

        public override Status Run(Context context)
        {
            if (base.Run(context).IsDone)
                return Status.Done;

            if (HapticSettings.GetHapticIntensity(context.X360.FeedbackLargeMotor, HapticSettings.LeftIntensity, out var leftIntensity))
                context.Steam.SendHaptic(HapticPad.Right, HapticSettings.HapticStyle, leftIntensity);

            if (HapticSettings.GetHapticIntensity(context.X360.FeedbackSmallMotor, HapticSettings.RightIntensity, out var rightIntensity))
                context.Steam.SendHaptic(HapticPad.Left, HapticSettings.HapticStyle, rightIntensity);

            context.X360.ResetFeedback();

            return Status.Continue;
        }
    }
}
