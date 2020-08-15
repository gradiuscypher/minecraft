var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "isOverlay": false,
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "defaultZoom": 1,
            "maxZoom": 8,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1597532179,
            "path": "day",
            "imgextension": "png",
            "showlocationmarker": true,
            "zoomLevels": 8,
            "world": "world",
            "poititle": "Markers",
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1597532564",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "compass": true,
            "zoom": true,
            "overlays": true
        }
    }
};
