var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "path": "day",
            "name": "Daytime Render",
            "base": "",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "maxZoom": 8,
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "defaultZoom": 1,
            "world": "world",
            "imgextension": "png",
            "showlocationmarker": true,
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1596959779
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596960163",
        "controls": {
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "compass": true,
            "pan": true
        }
    }
};
