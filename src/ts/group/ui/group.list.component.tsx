import * as moment from "moment";
import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GroupState } from "../../group/group.state";
import { SessionState } from "../../login/login.state";
import { requestGroups } from "../group.actions";
import { Group } from "../group.state";

interface GroupComponentProps {
  dispatch: any;
  session: SessionState;
  groups: GroupState;
}

class GroupEntryListComponent extends React.Component<GroupComponentProps, {}> {
  public componentDidMount() {
    this.props.dispatch(requestGroups(this.props.session.token));
  }

  public renderGroupEntry(group: Group) {
    return <li key={group.id}>{moment(group.created_at).format("MMMM Do YYYY - h:mm:ss a")} {group.title}</li>;
  }

  public render() {
    console.log(this.props);
    if (!this.props.groups) { return null; }
    const { groupEntries } = this.props.groups;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2" />
          <ul>
          {groupEntries && groupEntries.length > 0 ? (
            groupEntries.map((group: Group) => {
              return this.renderGroupEntry(group);
            })
          ) : (
            <li>No Groups</li>
          )}
          </ul>
        </div>
        <div>
          <Link to={"/groups/new"}>New Group</Link>
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
  GroupEntryListComponent
);
