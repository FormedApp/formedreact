import * as React from "react";
import { connect } from "react-redux";
import ActivitiesListComponent from "../../activities/ui/activities.list.component";
import { Group, GroupState } from "../../group/group.state";
import { SessionState } from "../../login/login.state";

class GroupsEntryDetailComponent extends React.Component<
  any,
  {}
> {
  constructor(props) {
    super(props);
  }

  public render() {
    console.log(this.props);
    if (!this.props.groups) {
      return null;
    }
    console.log("this.props", this.props);
    console.log("this.props.groups", this.props.groups);
    console.log("this.props.groups.groupEntries", this.props.groups.groupEntries);
    const group: Group = this.props.groups.groupEntries.find((t) => t.id === this.props.match.params.groupId);
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2" />
          <div>{group.title}</div>
          <ActivitiesListComponent group={group}/>
        </div>
      </div>
    );
  }
}

interface StateFromProps {
  session: SessionState;
  groups: GroupState;
}

const mapStateToProps = (state: any) => ({
  session: state.session,
  groups: state.groups
});

export default connect<StateFromProps, null, any>(mapStateToProps)(
  GroupsEntryDetailComponent
);
