var overviewerConfig = {
    "CONST": {
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "showlocationmarker": true,
            "world": "world",
            "zoomLevels": 8,
            "base": "",
            "poititle": "Markers",
            "last_rendertime": 1599659779,
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "imgextension": "png",
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "day",
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "spawn": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "compass": true
        },
        "cacheTag": "1599660170",
        "debug": true
    }
};
