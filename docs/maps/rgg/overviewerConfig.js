var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "world": "world",
            "minZoom": 0,
            "isOverlay": false,
            "defaultZoom": 1,
            "maxZoom": 8,
            "poititle": "Markers",
            "name": "Daytime Render",
            "north_direction": 0,
            "last_rendertime": 1598176579,
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "showlocationmarker": true,
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "controls": {
            "coordsBox": true,
            "mapType": true,
            "pan": true,
            "overlays": true,
            "zoom": true,
            "compass": true,
            "spawn": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598176966"
    }
};
