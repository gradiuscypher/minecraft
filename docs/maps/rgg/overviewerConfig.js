var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "maxZoom": 8,
            "isOverlay": false,
            "poititle": "Markers",
            "minZoom": 0,
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1599296179,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "base": "",
            "north_direction": 0,
            "defaultZoom": 1,
            "world": "world",
            "path": "day",
            "showlocationmarker": true,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "compass": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "mapType": true,
            "overlays": true
        },
        "cacheTag": "1599296569",
        "debug": true
    }
};
