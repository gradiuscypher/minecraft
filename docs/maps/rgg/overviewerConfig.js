var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        }
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "imgextension": "png",
            "world": "world",
            "base": "",
            "name": "Daytime Render",
            "minZoom": 0,
            "north_direction": 0,
            "path": "day",
            "last_rendertime": 1598417779,
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "showlocationmarker": true,
            "zoomLevels": 8,
            "defaultZoom": 1
        }
    ],
    "map": {
        "controls": {
            "overlays": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1598418170",
        "debug": true
    }
};
