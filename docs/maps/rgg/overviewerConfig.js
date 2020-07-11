var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "maxZoom": 8,
            "base": "",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "north_direction": 0,
            "isOverlay": false,
            "imgextension": "png",
            "world": "world",
            "defaultZoom": 1,
            "name": "Daytime Render",
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1594454180,
            "path": "day"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "spawn": true,
            "pan": true
        },
        "cacheTag": "1594454905"
    }
};
