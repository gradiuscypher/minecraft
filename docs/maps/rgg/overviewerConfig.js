var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "path": "day",
            "world": "world",
            "base": "",
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "isOverlay": false,
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "maxZoom": 8,
            "imgextension": "png",
            "zoomLevels": 8,
            "showlocationmarker": true,
            "minZoom": 0,
            "poititle": "Markers",
            "last_rendertime": 1597632979
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597633365",
        "controls": {
            "compass": true,
            "zoom": true,
            "spawn": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true
        }
    },
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "mapDivId": "mcmap"
    }
};
