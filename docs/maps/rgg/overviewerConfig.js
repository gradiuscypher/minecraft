var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "world": "world",
            "north_direction": 0,
            "maxZoom": 8,
            "showlocationmarker": true,
            "path": "day",
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "last_rendertime": 1598864179,
            "base": "",
            "minZoom": 0,
            "imgextension": "png",
            "isOverlay": false,
            "name": "Daytime Render",
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1598864570",
        "controls": {
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "mapType": true
        },
        "debug": true
    }
};
